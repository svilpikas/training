import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';


import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {UsersService} from './services/users-service/users.service';
import {InputComponent} from './shared/input/input.component';
import {LoginComponent} from './components/login/login.component';
import {LoginService} from './services/login-service/login.service';
import {TokenInterceptorService} from './services/auth/token.interceptor.service';
import {AuthService} from './services/auth/auth.service';
import {AppRoutingModule} from './test.module';
import {AuthGuard} from './test2.service';

// const appRoutes: Routes = [
//     {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
//     {path: 'users', component: UsersComponent, canActivate: [AuthGuard]}
// ];

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        InputComponent,
        LoginComponent,
    ],
    imports: [
        AppRoutingModule,
        // RouterModule.forRoot(appRoutes),
        BrowserModule,
        MatTableModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatStepperModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
    ],
    providers: [UsersService, LoginService, AuthService, AuthGuard, {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
