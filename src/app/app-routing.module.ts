import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductComponent } from './product/product.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PriceComponent } from './price/price.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path: '', component:HomeComponent}, 
  {path: 'search/:searchTerm', component: ProductComponent},
  { path: 'home', component: HomeComponent }, 
  { path: 'product', component: ProductComponent },
  { path: 'about-us', component: AboutUsComponent }, 
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'price', component: PriceComponent },
  { path: 'shipment', component: ShipmentComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
