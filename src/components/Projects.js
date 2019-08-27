import React from 'react'

import { filterProjects, getFilters } from '../helpers/projectsHelper'
import useFilters from '../hooks/useFilters'
import FilterButton from './FilterButton'
import Container from './Container'
import Filters from './Filters'
import Project from './Project'

import projects from '../projects'
import styles from './Projects.css'

const FILTERS = getFilters(projects)

const Projects = () => {
  const [activeFilters, toggleFilter, clearFilters] = useFilters()

  const filteredProjects = filterProjects(projects, activeFilters)

  return (
    <div className={styles.bg}>
      <Filters>
        <FilterButton
          key="Show"
          text={`Show all (${projects.length})`}
          isActive={!activeFilters.length}
          onClick={clearFilters}
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
