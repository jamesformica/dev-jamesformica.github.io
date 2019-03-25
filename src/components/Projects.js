import React, { useState } from 'react'

import { filterProjects, getFilters } from '../helpers/projectsHelper'
import Container from './Container'
import FilterButton from './FilterButton'
import Filters from './Filters'
import Project from './Project'
import projects from '../projects.json'
import styles from './Projects.css'

const FILTERS = getFilters(projects)

const Projects = () => {
  const [activeFilters, setActiveFilters] = useState([])

  const toggleFilter = (text) => {
    if (activeFilters.includes(text)) {
      setActiveFilters(activeFilters.filter(f => f !== text))
    } else {
      setActiveFilters([...activeFilters, ...[text]])
    }
  }

  const filteredProjects = filterProjects(projects, activeFilters)

  return (
    <div className={styles.bg}>
      <Filters>
        <FilterButton
          key="Show"
          text={`Show all (${projects.length})`}
          isActive={!activeFilters.length}
          onClick={() => setActiveFilters([])}
        />
        {FILTERS.map(f => (
          <FilterButton
            key={f}
            text={f}
            isActive={activeFilters.includes(f)}
            onClick={toggleFilter}
          />
        ))}
      </Filters>

      <Container>
        <div className={styles.projects}>
          {filteredProjects.map(p => <Project project={p} key={p.name} />)}
        </div>
      </Container>
    </div>
  )
}

export default Projects
