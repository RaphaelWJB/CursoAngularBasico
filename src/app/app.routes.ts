// Importação das Rotas do angular
import {Routes} from '@angular/router'

// Importações dos menus
import {HomeComponent} from './home/home.component'
import {RestaurantsComponent} from './restaurants/restaurants.component'
import {RestaurantsDetailComponent} from './restaurants-detail/restaurants-detail.component'
import {AboutComponent} from './about/about.component'
import {OrderComponent} from './order/order.component'
import {MenuComponent} from './restaurants-detail/menu/menu.component'
import {ReviewsComponent} from './restaurants-detail/reviews/reviews.component'
import {OrderSummaryComponent} from './order-summary/order-summary.component'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantsDetailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent}
    ]},
  {path: 'about', component: AboutComponent},
  {path: 'order', component: OrderComponent},
  {path: 'order-summary', component: OrderSummaryComponent}
]
