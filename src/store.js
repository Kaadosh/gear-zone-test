import { defineStore } from 'pinia';
import { mockDeals } from '../../mock/deals';
export const useDealsStore = defineStore('deals', {
  state: () => ({
    deals: mockDeals,
  }),
});
