import React, { useContext } from 'react'
import styled from 'styled-components'
import ArticleListPage from './ArticleListPage'
import SearchResult from './SearchResult'
import { SearchContext } from '../context/search-context'
import { OrderContext } from '../context/order-context'
import OrderBy from './OrderBy'
import BookmarkButton from '../components/BookmarkButton'

const ContainerWrapper = styled.div`
  position: relative;
`

const Container = styled.div`
  display: flex;  
  position: absolute;
  top: 10px;
  right: 50px;
  align-items: center;
`

const ArticlesMain = () => {
  const { query } = useContext(SearchContext)
  const { orderBy } = useContext(OrderContext)
  
  return (
    <ContainerWrapper>
      {
        query === '' ?
          <ArticleListPage query={query} orderBy={orderBy} /> :
          <SearchResult query={query} orderBy={orderBy}/>
      }
      <Container>
        <BookmarkButton />
        <OrderBy />
      </Container>
    </ContainerWrapper>
  )
}

export default ArticlesMain
