import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CompanyComponent } from './components/company/company.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { ChangeColorDirective } from './directives/change-color.directive';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { EmojiDirective } from './directives/emoji.directive';
import { BuiltInPipesComponent } from './components/built-in-pipes/built-in-pipes.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { GenderPipe } from './pipes/gender.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CompanyComponent,
    EmployeeComponent,
    NgSwitchComponent,
    NgIfComponent,
    NgClassComponent,
    NgStyleComponent,
    ChangeColorDirective,
    CustomDirectiveComponent,
    EmojiDirective,
    BuiltInPipesComponent,
    CurrencyPipe,
    GenderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
