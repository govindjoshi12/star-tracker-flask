import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Star(props) {

    let color = props.color

    const styles = {
        star: {
            position: "relative",
            color: color
        },
        starSubject: {
            position: "relative",
            top: "50%",
            left: "50%",
            margin: "-25px 0 0 -25px"
        }
    }

    return (
        <div style={styles.star}>
            <FontAwesomeIcon icon={faStar} />
            <span style={styles.starSubject}>{props.subj}</span>
        </div>
    )
}

export default Star;