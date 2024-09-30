import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Your home component
  { path: 'products', component: ProductsComponent },
  { path:'footer',component:FooterComponent},
  { path:'comment',component:CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
