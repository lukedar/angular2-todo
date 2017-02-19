import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ArticleComponent} from './article.component';
import {ArticleListComponent} from './article-list.component';
import {SelectedComponent} from './selected.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ArticleComponent,
    ArticleListComponent,
    SelectedComponent
  ],
  bootstrap: [
    ArticleListComponent
  ]
})
export class AppModule {}
