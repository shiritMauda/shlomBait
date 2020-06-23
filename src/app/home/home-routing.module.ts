import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from '../contents/payment/payment.component';
import { CareLogComponent } from '../contents/care-log/care-log.component';
import { ClientComponent } from '../contents/client/client.component';
import { LoginComponent } from 'src/login/login/login.component';

const routes: Routes = [
    {
        path: 'home/:id', component: HomeComponent
    },
    { path: 'home', component: LoginComponent },
    { path: 'home/client', component: ClientComponent },
    { path: 'home/careLog', component: CareLogComponent },
    { path: 'careLog/:id', component: CareLogComponent },
];
const routes1: Routes = [
    {
        path: 'home', component: HomeComponent, children: [


            { path: 'payment', component: PaymentComponent },
            { path: 'careLog', component: CareLogComponent },
            { path: 'careLog/:id', component: CareLogComponent },
            { path: 'client', component: ClientComponent },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }