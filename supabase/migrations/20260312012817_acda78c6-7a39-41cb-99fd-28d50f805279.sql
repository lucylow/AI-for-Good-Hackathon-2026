
-- Fix matches policies: restrict insert/update to involved parties
DROP POLICY "Authenticated can insert matches" ON public.matches;
DROP POLICY "Involved parties can update matches" ON public.matches;

CREATE POLICY "Involved parties can insert matches" ON public.matches
  FOR INSERT TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.donations d WHERE d.id = donation_id AND d.donor_id = auth.uid()
    )
    OR
    EXISTS (
      SELECT 1 FROM public.recipients r WHERE r.id = recipient_id AND r.user_id = auth.uid()
    )
  );

CREATE POLICY "Involved parties can update matches" ON public.matches
  FOR UPDATE TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.donations d JOIN public.matches m ON m.donation_id = d.id WHERE m.id = matches.id AND d.donor_id = auth.uid()
    )
    OR
    EXISTS (
      SELECT 1 FROM public.recipients r JOIN public.matches m ON m.recipient_id = r.id WHERE m.id = matches.id AND r.user_id = auth.uid()
    )
  );

-- Fix impact_events insert policy
DROP POLICY "Authenticated can insert impact" ON public.impact_events;

CREATE POLICY "Involved parties can insert impact" ON public.impact_events
  FOR INSERT TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.matches m
      JOIN public.donations d ON d.id = m.donation_id
      WHERE m.id = match_id AND d.donor_id = auth.uid()
    )
    OR
    EXISTS (
      SELECT 1 FROM public.matches m
      JOIN public.recipients r ON r.id = m.recipient_id
      WHERE m.id = match_id AND r.user_id = auth.uid()
    )
  );
