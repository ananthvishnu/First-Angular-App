# Decorators in Angular
In Angular, a decorator is a special kind of declaration that can be attached to classes, methods, properties, or parameters. Decorators are used to modify the behavior of these declarations or to add additional metadata to them. They are part of the TypeScript language and are widely used in Angular to enhance the capabilities of classes and their members.

Decorators are denoted by the @ symbol followed by the decorator name and optional arguments. They are applied just before the declaration they are modifying. For example:


@decoratorName(arg1, arg2)
class MyClass {
    @propertyDecorator
    myProperty: string;

    @methodDecorator
    myMethod() {
        // Method logic
    }

    constructor(@parameterDecorator arg: number) {
        // Constructor logic
    }
}


# @Component: Used to define an Angular component with its template and styles.

# @NgModule: Used to define an Angular module.

# @Injectable: Used to mark a service as injectable so that it can be injected into other components and services.

# @Input and @Output: Used to define input and output properties for components, respectively.

# @HostListener: Used to define event listeners in components.

# @ViewChild and @ViewChildren: Used to get references to child components or elements within a component's view.

# @Directive: Used to define a custom directive in Angular.