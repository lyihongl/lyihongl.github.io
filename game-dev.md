---
title: Game dev
filename: game-dev.md
remote_theme: pages-themes/midnight@v0.2.0
plugins:
- jekyll-remote-theme # add this line to the plugins list if you already have one
---

### Random game dev demos

#### 2nd order solver to simulate spring mass damper/pid control

A spring mass system can be modelled by the second order differential equation:

$y + c_1 \frac{dy}{dt} + c_2 \frac{dy^2}{d^2t} = x + c_3 \frac{dx}{dt}$

where $y$ is the state of our object that we wish to control, and x is the target state.
For example, if we wanted to rotate an image to a specific angle, y would be our current angle, and x would be the target angle.
Then depending on the parameters $c_1, c_2, c_3$, we can simulate, underdamped, overdamped, and perfectly damped systems.
Here is a demo that is using Runga-Kutta 4 to find a numerical solution to the above diff eq. The image is being rotated to an angle
with an underdamped system, thus it over rotates and bounces back and forth.

![rotate-1](./gifs/rotate-1.gif)

Below are some code snippets used to produce the above behavior.

RK4 Solver:

```c++
double accel(double x, double dx, double y, double dy, double t, double c1,
             double c2, double c3) {
    return (x + c3 * dx - y - c1 * dy) / c2;
}

glm::dvec2 Physics::evaluate(double target, const glm::dvec2& y,
                             const glm::dvec2& dy, double t, double dt) {
    glm::dvec2 state = { 
        y[0] + dy[0] * dt,
        y[1] + dy[1] * dt
    };
    glm::dvec2 output = {
        state[1],
        accel(target, 0.005, y[0], y[1], t+dt, 0.01, 0.0001, 0)
    };
    return output;
}

glm::dvec2 Physics::RK4(double target, const glm::dvec2& state,
                        const glm::dvec2& d0, double t, double dt) {
    glm::dvec2 k1, k2, k3, k4;
    k1 = evaluate(target, state, d0, t, dt);
    k2 = evaluate(target, state, k1, t, dt * 0.5f);
    k3 = evaluate(target, state, k2, t, dt * 0.5f);
    k4 = evaluate(target, state, k3, t, dt);

    double dxdt = dt / 6.0 * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]);
    double dvdt = dt / 6.0 * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1]);
    return {dxdt, dvdt};
}
```

How to use the RK4 solver:

```c++
glm::vec2 state = {0, 0};
glm::vec2 dState = {0, 0};

// ....

// some game loop
while(some condition to make this 60fps){
    // update the state with the latest info
    // state.x = position
    // state.y = velocity
    state.x = angle;

    // compute second order eqn
    // dState.x = velocity
    // dstate.y = acceleration
    dState = Physics::RK4(
                target, state, dState, time,
                static_cast<double>(delta_time_us) / 10000000);

    // update state
    // position += velocity
    // velocity += acceleration
    state += dState;

    // use derivative for other things
    vrad = dState.x;
    angle += vrad;

    renderSprite(..., angle, ...);
}



```

#### Procedurally animated legs

#### Procedurally animated worm/rope