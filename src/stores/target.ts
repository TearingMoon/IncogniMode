import { defineStore } from 'pinia'
import { targetModel } from '@/models/targetModel'

export const useTargetStore = defineStore('target', {
  state: () => ({
    targets: [] as targetModel[] // Array of targetModels
  }),
  getters: {
    getIds: (state) => {
      return state.targets.map((t) => t.id)
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
