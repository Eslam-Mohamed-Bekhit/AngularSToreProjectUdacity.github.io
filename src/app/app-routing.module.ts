import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation/confirmation.component';
import { NotFoundComponent } from './components/not-found/not-found/not-found.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './components/product-list/product-list/product-list.component';

const routes: Routes = [
  {path:'/',component:ProductListComponent},
  {path:'/item/:id',component:ProductItemDetailComponent},
  {path:'cart',component:CartComponent},
  {path:'confirm',component:ConfirmationComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
