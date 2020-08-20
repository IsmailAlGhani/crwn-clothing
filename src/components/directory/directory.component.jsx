import React from 'react';
import './directory.styles.scss';
import SECTION_DATA from './sections.data.js';
import MenuItem from '../menu-item/menu-item.compponent';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SECTION_DATA
    }
  }

  render() {
    return(
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;