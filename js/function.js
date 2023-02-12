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

// Path: js/farms.js
function allFarms() {
    document.getElementById('idAllFarmsActive').style.background = '#102D49';
    document.getElementById('idStableFarmsActive').style.background = 'none';
    document.getElementById('idDoubleRewardsActive').style.background = 'none';
    document.getElementById('idInactiveFarmsActive').style.background = 'none';

    document.getElementById('idAllFarms').style.display = 'block';
    document.getElementById('idStableFarms').style.display = 'none';
    document.getElementById('idDoubleRewards').style.display = 'none';
    document.getElementById('idInactiveFarms').style.display = 'none';
}

function stableFarms() {
    document.getElementById('idAllFarmsActive').style.background = 'none';
    document.getElementById('idStableFarmsActive').style.background = '#102D49';
    document.getElementById('idDoubleRewardsActive').style.background = 'none';
    document.getElementById('idInactiveFarmsActive').style.background = 'none';

    document.getElementById('idAllFarms').style.display = 'none';
    document.getElementById('idStableFarms').style.display = 'block';
    document.getElementById('idDoubleRewards').style.display = 'none';
    document.getElementById('idInactiveFarms').style.display = 'none';
}

function doubleRewars() {
    document.getElementById('idAllFarmsActive').style.background = 'none';
    document.getElementById('idStableFarmsActive').style.background = 'none';
    document.getElementById('idDoubleRewardsActive').style.background = '#102D49';
    document.getElementById('idInactiveFarmsActive').style.background = 'none';

    document.getElementById('idAllFarms').style.display = 'none';
    document.getElementById('idStableFarms').style.display = 'none';
    document.getElementById('idDoubleRewards').style.display = 'block';
    document.getElementById('idInactiveFarms').style.display = 'none';
}

function inactiveFarms() {
    document.getElementById('idAllFarmsActive').style.background = 'none';
    document.getElementById('idStableFarmsActive').style.background = 'none';
    document.getElementById('idDoubleRewardsActive').style.background = 'none';
    document.getElementById('idInactiveFarmsActive').style.background = '#102D49';

    document.getElementById('idAllFarms').style.display = 'none';
    document.getElementById('idStableFarms').style.display = 'none';
    document.getElementById('idDoubleRewards').style.display = 'none';
    document.getElementById('idInactiveFarms').style.display = 'block';
}

// Path: js/farms.js
function itemTransform1() {
    document.getElementById('idItemShow1').style.display = 'flex';
    document.getElementById('idItemShow2').style.display = 'none';
    document.getElementById('idItemShow3').style.display = 'none';
}

function itemTransform2() {
    document.getElementById('idItemShow1').style.display = 'none';
    document.getElementById('idItemShow2').style.display = 'flex';
    document.getElementById('idItemShow3').style.display = 'none';
}

function itemTransform3() {
    document.getElementById('idItemShow1').style.display = 'none';
    document.getElementById('idItemShow2').style.display = 'none';
    document.getElementById('idItemShow3').style.display = 'flex';
}