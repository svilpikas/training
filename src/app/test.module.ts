import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {UsersComponent} from './components/users/users.component';

// import { NewsComponent } from './news/news.component';
// import { LoginComponent } from './login/login.component';
// import { PlacesComponent } from './places/places.component';
// import { RegionsComponent } from './regions/regions.component';
// import { PlacetypesComponent } from './placetypes/placetypes.component';
// import {AuthService} from './services/auth/auth.service';
import {AuthGuard} from './test2.service';

const appRoutes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
    {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules, useHash: true})
    ],
    exports: [RouterModule]
})


export class AppRoutingModule {
}