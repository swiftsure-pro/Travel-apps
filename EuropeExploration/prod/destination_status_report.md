# Destination Status Summary

- Run ID: 20261007T175254.172862Z
- Generated at (UTC): 2026-10-07T17:56:16.170809+00:00
- Destination count: 5
- Retry recommended: 0
- Retry attempted: 0
- Resolved after retry: 0
- Unresolved after retry: 0
- Not retried due to cap: 0

## Needs Attention (0)
- None

## All Destinations (5)
- Brussels, Belgium (brussels) — status=degraded, terminal=stable_without_retry
- Amsterdam, Netherlands (amsterdam) — status=degraded, terminal=stable_without_retry
- Berlin, Germany (berlin) — status=degraded, terminal=stable_without_retry
- Prague, Czech Republic (prague) — status=healthy, terminal=stable_without_retry
- Frankfurt, Germany (frankfurt) — status=degraded, terminal=stable_without_retry

## Removed for No Verified URL (6)
- **Brussels, Belgium** (2)
  - Egzon Burger Friterie — dinner_recommendations (5 candidate(s) considered)
    - direct_batch_candidate_rejected_generic: https://www.tripadvisor.com/Restaurants-g188644-Brussels.html
    - direct_batch_candidate_rejected: https://www.google.com/maps/search/?api=1&query=Egzon+Burger+Friterie+Evere+Brussels+Belgium
    - search_candidate_refused_by_url_policy: https://www.facebook.com/FriterieEgzon/
  - Snack Dag — dinner_recommendations (2 candidate(s) considered)
    - direct_batch_candidate_rejected_generic: https://www.tripadvisor.com/Restaurants-g188644-Brussels.html
    - direct_batch_candidate_rejected: https://www.google.com/maps/search/?api=1&query=Snack+Dag+Schaerbeek+Brussels+Belgium
- **Amsterdam, Netherlands** (1)
  - Canal Ring boat tour — top_attractions (5 candidate(s) considered)
    - direct_batch_candidate_rejected: https://www.stromma.com/en-nl/amsterdam/canal-cruises/
    - direct_batch_maps_query_not_accepted_as_url: https://www.google.com/maps/search/?api=1&query=Canal%20Ring%20boat%20tour%20Amsterdam%2C%20Netherlands
    - search_resolved: https://www.mytravelbuzzg.com/amsterdam-itinerary-travel-guide-blog/
    - authoritative_no_match_recovered_via_general_search: https://www.mytravelbuzzg.com/amsterdam-itinerary-travel-guide-blog/
    - audit_discarded_previously_accepted_url: https://www.mytravelbuzzg.com/amsterdam-itinerary-travel-guide-blog/
      [retention exit (31, "if kind in {'generic', 'attraction'} and self._is_the_destinations_own_page(url, item_name, dest_name)")]
- **Berlin, Germany** (1)
  - Gold Bread 22 — dinner_recommendations (5 candidate(s) considered)
    - direct_batch_candidate_rejected: https://www.travel2berlin.com/post/berlin-food-lovers-street-food-markets-restaurants
    - direct_batch_candidate_rejected: https://helloberl.in/best-cheap-eats-in-berlin/
    - direct_batch_candidate_rejected: https://www.google.com/maps/search/?api=1&query=Gold+Bread+22+Triftstra%C3%9Fe+8+13353+Berlin
- **Frankfurt, Germany** (2)
  - Currywurst Taunus 25 — dinner_recommendations (3 candidate(s) considered)
    - direct_batch_candidate_rejected_generic: https://www.tripadvisor.com/Restaurants-g187337-zfp16-Frankfurt_Hesse.html
    - direct_batch_candidate_rejected: https://www.falstaff.com/de/die-besten/streetfood-guide-deutschland-2025-die-besten-imbisse-in-frankfurt
    - direct_batch_candidate_rejected: https://www.google.com/maps/search/?api=1&query=Currywurst+Taunus+25+Taunusstra%C3%9Fe+25+Frankfurt+am+Main
  - Imbiss am Riederwald — dinner_recommendations (6 candidate(s) considered)
    - direct_batch_candidate_rejected_generic: https://www.tripadvisor.com/Restaurants-g187337-zfp16-Frankfurt_Hesse.html
    - direct_batch_candidate_rejected_generic: https://www.google.com/maps/search/?api=1&query=Alims+Fischimbiss+Frankfurt+am+Main
    - direct_batch_candidate_rejected_generic: https://www.speisekarte.de/frankfurt-am-main/restaurants/imbiss
    - direct_batch_candidate_rejected_generic: https://www.google.com/maps/search/?api=1&query=Phuket+Thai+Imbiss+Frankfurt+am+Main
    - direct_batch_candidate_rejected: https://www.google.com/maps/search/?api=1&query=Imbiss+am+Riederwald+Frankfurt+am+Main
    - url_collision_rejected: https://www.falstaff.com/de/die-besten/streetfood-guide-deutschland-2025-die-besten-imbisse-in-frankfurt
