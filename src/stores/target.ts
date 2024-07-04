import { defineStore } from 'pinia'
import { targetModel } from '@/models/targetModel'

export const useTargetStore = defineStore('target', {
  state: () => ({
    targets: [] as targetModel[] // Array of targetModels
  }),
  getters: {
    getIds: (state) => {
      return state.targets.map((t) => t.id)
    },
    getFilteredTargets: (state) => (filterName: string, filterUrl: string) => {
      return state.targets.filter(
        (t) =>
          t.name.toLowerCase().includes(filterName.toLowerCase()) &&
          t.url.toLowerCase().includes(filterUrl.toLowerCase())
      )
    }
  },
  actions: {
    /// Add a new target to the store
    addTarget(target: targetModel) {
      target.id = this.generateUniqueId()
      this.targets.push(target)
      console.info('Added target:', target)
      this.saveTargets()
    },

    /// Remove a target from the store
    removeTarget(target: targetModel) {
      this.targets = this.targets.filter((t) => t.id !== target.id)
      console.info('Removed target:', target)
      this.saveTargets()
    },

    /// Save targets to local storage
    saveTargets() {
      const data = JSON.stringify(this.targets)
      localStorage.setItem('targets', data)
      console.info('Saved targets to local storage')
    },

    /// Edit a target in the store
    editTarget(target: targetModel) {
      const index = this.targets.findIndex((t) => t.id === target.id)
      if (index !== -1) {
        this.targets[index] = target
        console.info('Edited target:', target)
        this.saveTargets()
      } else {
        console.error('Target not found:', target)
      }
    },

    /// Clear all targets from the store
    clearTargets() {
      this.targets = []
      console.info('Cleared all targets')
      this.saveTargets()
    },

    /// Load targets from local storage
    loadTargets() {
      const data = localStorage.getItem('targets')
      if (data) {
        this.targets = JSON.parse(data)
        console.info('Loaded targets from local storage')
      } else {
        console.warn('No targets found in local storage')
      }
    },

    /// Generate a unique id for a new target
    generateUniqueId() {
      let newId = 1
      while (this.getIds.includes(newId)) {
        newId++
      }
      return newId
    }
  }
})
