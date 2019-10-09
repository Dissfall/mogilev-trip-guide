import React, { Component, ReactNode } from 'react'; 
import styled from 'styled-components';

import Card from '@material-ui/core/Card';

/**
 * Why CardStyedContainer is used?
 *
 * If you try to directly stylize `Card`
 * with the `withdescription` property,
 * everything will work correctly,
 * but in the terminal you will see an error
 * saying that you are trying to pass a bollean
 * type to a non-boolean property
 **/

const CardStyleContainer = (props: { className?: string, children?: ReactNode }) => {
  return (
    <Card className={ props.className }>
      { props.children }
    </Card>
  )
}

export default styled(CardStyleContainer)<{ withdescription?: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  max-width: 350px;
  height: ${ props => props.withdescription ? `var(--card-with-description-height)` : `var(--card-height)`};
  margin: 8px;

  .card-with-description {
    height: var(--card-with-description-height);
  }
`;
