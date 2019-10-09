import React, { Component } from 'react';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


const steps = [
  {
    name: '230m from you'
  },
  {
    name: '1.5km from you. 560m from previous place'
  },
  {
    name: 'step3'
  },
  {
    name: 'step4'
  },
]

class TripWay extends Component<any, { step: number }> {
  constructor(props: any) {
    super(props);

    this.state = { step: 1 }
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Stepper nonLinear={true} orientation="vertical">
          {steps.map(step => (
            <Step key={step.name}>
              <StepLabel>{step.name}</StepLabel>
              <Card style={{ height: '75px', width: '400px', margin: '10px' }}>
                <h1>sdfg</h1>
              </Card>
            </Step>
          ))}
        </Stepper>
      </div>
    );
  }
}

export default TripWay;
