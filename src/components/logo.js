import React from "react"
import { Link } from "gatsby"
import IconTed from '../../static/assets/svg/imageclean.svg'

import { Location } from '@reach/router';

const Logo = function (props) {
  
  return props.location.pathname !== '/' ? (
    <div className="site-logo">
      <Link className="ted-icon" to="/"><IconTed className="forcewhite" /></Link>
    </div>
  ) : (<div className="site-logo"/>)
  
}

const prop = (props) => (
  <Location>
    {locationProps => <Logo {...locationProps} {...props} />}
  </Location>
)

export default prop