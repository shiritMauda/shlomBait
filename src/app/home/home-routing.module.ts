import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from '../contents/payment/payment.component';
import { CareLogComponent } from '../contents/care-log/care-log.component';
import { ClientComponent } from '../contents/client/client.component';
import { LoginComponent } from 'src/login/login/login.component';
const routes2: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: LoginComponent },

    { path: 'home/:id', component: HomeComponent },

    { path: 'client', component: ClientComponent },
    { path: 'careLog', component: CareLogComponent },
    { path: 'careLog/:id', component: CareLogComponent }

];

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: LoginComponent },
    { path: 'home/:id', component: HomeComponent , children: [

            { path: 'client', component: ClientComponent },
            { path: 'careLog', component: CareLogComponent },
            { path: 'careLog/:id', component: CareLogComponent }]
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }