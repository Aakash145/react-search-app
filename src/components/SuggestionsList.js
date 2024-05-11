import React from 'react'

import "../styles/SuggestionsList.css"
import { SearchResult } from './SearchResult'

export const SuggestionsList = ({results}) => {
  return (
    <div className='suggestion-list'>
        {
            results.map((result, id) => {
                return <SearchResult key={id} result={result}/>
            })
        }
    </div>
  )
}
