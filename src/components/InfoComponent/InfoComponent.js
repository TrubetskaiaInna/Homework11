import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}))

export default function TransitionsModal () {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <button type='button' onClick={handleOpen} style={{ width: 150 }}>
        Price
      </button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h6 id='transition-modal-title'>Package Silver:</h6>
            <p id='transition-modal-description'>
              100$
            </p>
            <ul>
              <li>2 animators</li>
              <li> 1.5 hours</li>
              <li> The game plan</li>
              <li>Aquagrim</li>
              <li>Mini disco</li>
            </ul>
            <h6 id='transition-modal-title'>Package Gold:</h6>
            <p id='transition-modal-description'>
              200$
            </p>
            <ul>
              <li>2 animators</li>
              <li> 2 hours</li>
              <li> The game plan</li>
              <li>Aquagrim</li>
              <li>Mini disco</li>
              <li>Disco with soap bubbles</li>
              <li>Dance battles, flash mobs</li>
            </ul>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
