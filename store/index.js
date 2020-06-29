export const state = () => ({
  "isMobileMenuOpen": false
})

export const mutations = {
  TOGGLEMOBILEMENU(state) {
    state.isMobileMenuOpen = !state.isMobileMenuOpen
  }
}