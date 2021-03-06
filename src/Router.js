import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Header, Content, Footer } from './components/fragments'
import ArticleDetailPage from './containers/ArticleDetailPage'
import BookmarkListPage from './containers/BookmarkListPage'
import ArticleMain from './containers/ArticlesMain'

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
        <Content>
          <Switch>
            <Route path="/bookmarks" exact={true} component={BookmarkListPage} />
            <Route path="/article/:sectionId" component={ArticleDetailPage} />
            <Route path="/" component={ArticleMain} />
          </Switch>
        </Content>
      <Footer />
    </BrowserRouter>
  )
}

export default Router