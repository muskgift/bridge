import React, { useEffect, useState, useContext, useCallback } from 'react'
import { getInjectedWeb3, setChangeListeners } from 'util/web3'
import { ConnectionState, l2Network } from 'util/index'
import * as ethers from 'ethers'
import App from './index'
import ModeContext from './ModeContext'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import ConnectWarning from './ConnectWarning'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import fox from 'media/images/metamask-fox.svg'
import networks, { arbNetworkIds }  from "./networks"
import { useLocalStorage } from '@rehooks/local-storage'
import { Bridge, L1Bridge, L2Bridge } from 'arb-ts'

const Injector = () => {

  useEffect(()=>{
    window.location.replace("http://bridge.arbitrum.io/")
  },[])

  return <div>{renderAlert('redirecting to https://bridge.arbitrum.io/', 'primary')}</div>
  
}

export const renderAlert = (
  message: string,
  variant: 'danger' | 'primary' = 'danger'
) => (
  <Container>
    <Alert variant={variant}>{message}</Alert>
  </Container>
)
export default Injector
