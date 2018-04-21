# Airport Challenge in JS

Software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.

## Aim

To practice test driving JavaScript using Jasmine - especially the use of mocking.

## Installation

`git clone git@github.com:telgi/airport-js-revisited.git`

## Usage

Open `SpecRunner.html` in a browser

Open developer tools and use the console to create Airport and Plane objects:

```
var airport = new Airport();
var plane = new Plane();

airport.clearForLanding(plane);
```

## Testing

Run `open SpecRunner.html` to run Jasmine tests

## User Stories

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct a plane to land at an airport

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

## Features

* Plane can land at an airport [x]
* Plane can take off from an airport [x]
* Plane has location status to confirm whether it is in the airport or not [x]
* Plane can't land if weather is stormy [x]
* Plane can't take off if weather is stormy [x]
* Plane can't land if airport is full [x]
* Airport has a default capacity that can be changed when necessary [x]
