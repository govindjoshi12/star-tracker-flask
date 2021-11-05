import { Spinner } from "react-bootstrap"

// Make sure parent element has "position: relative"
export function Loading(props) {

    let styles = {
        loading: {}
    };

    // Global (Centered in parent div)
    if(!props.inline) {
        styles = {
            loading: {
                position: "relative",
                top: "50%",
                left: "50%",
                margin: "-25px 0 0 -25px"
            }
        }
    }

    return(
        <Spinner animation="border" role="status" size='lg' className={styles.loading}>
            <span className="sr-only"></span>
        </Spinner>
    )
}