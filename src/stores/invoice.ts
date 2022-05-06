import { defineStore } from 'pinia'

export const invoiceStore = defineStore('invoice', {
  state: () => {
    return {
      invoice: {
        client: {
          lastname: "",
          firstname: "",
          phoneNumber: "",
          totalPrice: "",
          tva: "0%",
          date: new Date(),
        },
        lines: [
          {
            product: "Ligne 1",
            price: "8.99",
            quantity: "1",
          },
        ],
      },
    }
  },
  getters: {
    clientFullName: (state) => {
      return `${state.invoice.client.firstname} ${state.invoice.client.lastname} (${state.invoice.client.phoneNumber})`
    }
  },
  actions: {
  },
})
