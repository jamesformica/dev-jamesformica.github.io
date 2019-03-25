import { useState } from 'react'

function useFilters() {
  const [activeFilters, setActiveFilters] = useState([])

  const toggleFilter = (text) => {
    if (activeFilters.includes(text)) {
      setActiveFilters(activeFilters.filter(f => f !== text))
    } else {
      setActiveFilters([...activeFilters, ...[text]])
    }
  }

  const clearFilters = () => setActiveFilters([])

  return [activeFilters, toggleFilter, clearFilters]
}

export default useFilters
