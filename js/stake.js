function lockActive() {
    document.getElementById('idLockActive').style.background = '#05192D';
    document.getElementById('idStakingActive').style.background = 'none';
    document.getElementById('idPoolsActive').style.background = 'none';

    document.getElementById('idLock').style.display = 'block';
    document.getElementById('idLegend').style.display = 'none';
    document.getElementById('idStaking').style.display = 'none';
    document.getElementById('idInactivePools').style.display = 'none';
}

function stakingActive() {
    document.getElementById('idLockActive').style.background = 'none';
    document.getElementById('idStakingActive').style.background = '#05192D';
    document.getElementById('idPoolsActive').style.background = 'none';

    document.getElementById('idStaking').style.display = 'block';
    document.getElementById('idLegend').style.display = 'block';
    document.getElementById('idLock').style.display = 'none';
    document.getElementById('idInactivePools').style.display = 'none';
}

function poolsActive() {
    document.getElementById('idLockActive').style.background = 'none';
    document.getElementById('idStakingActive').style.background = 'none';
    document.getElementById('idPoolsActive').style.background = '#05192D';

    document.getElementById('idInactivePools').style.display = 'block';
    document.getElementById('idLegend').style.display = 'block';
    document.getElementById('idLock').style.display = 'none';
    document.getElementById('idStaking').style.display = 'none';
}

// Path: js/bridge.js
function bridgeActive() {
    document.getElementById('idBridgeActive').style.background = '#05192D';
    document.getElementById('idHistoryActive').style.background = 'none';
    document.getElementById('idSwapGasActive').style.background = 'none';

    document.getElementById('idBridge').style.display = 'block';
    document.getElementById('idHistory').style.display = 'none';
    document.getElementById('idSwapGas').style.display = 'none';
}

function historyActive() {
    document.getElementById('idBridgeActive').style.background = 'none';
    document.getElementById('idHistoryActive').style.background = '#05192D';
    document.getElementById('idSwapGasActive').style.background = 'none';

    document.getElementById('idHistory').style.display = 'block';
    document.getElementById('idBridge').style.display = 'none';
    document.getElementById('idSwapGas').style.display = 'none';
}

function swapGasActive() {
    document.getElementById('idBridgeActive').style.background = 'none';
    document.getElementById('idHistoryActive').style.background = 'none';
    document.getElementById('idSwapGasActive').style.background = '#05192D';

    document.getElementById('idSwapGas').style.display = 'block';
    document.getElementById('idBridge').style.display = 'none';
    document.getElementById('idHistory').style.display = 'none';
}