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
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ParentOneComponent } from './components/parent-one/parent-one.component';
import { ChildOneComponent } from './components/child-one/child-one.component';
import { ParentTwoComponent } from './components/parent-two/parent-two.component';
import { ChildTwoComponent } from './components/child-two/child-two.component';
import { ParentThreeComponent } from './components/parent-three/parent-three.component';
import { ChildThreeComponent } from './components/child-three/child-three.component';
import { ParentLifeCycleComponent } from './components/parent-life-cycle/parent-life-cycle.component';
import { ChildLifeCycleComponent } from './components/child-life-cycle/child-life-cycle.component';
import { ParentFourComponent } from './components/parent-four/parent-four.component';
import { ChildFourComponent } from './components/child-four/child-four.component';
import { ParentFiveComponent } from './components/parent-five/parent-five.component';
import { ChildFiveComponent } from './components/child-five/child-five.component';


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
    GenderPipe,
    ParentComponent,
    ChildComponent,
    ParentOneComponent,
    ChildOneComponent,
    ParentTwoComponent,
    ChildTwoComponent,
    ParentThreeComponent,
    ChildThreeComponent,
    ParentLifeCycleComponent,
    ChildLifeCycleComponent,
    ParentFourComponent,
    ChildFourComponent,
    ParentFiveComponent,
    ChildFiveComponent
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
