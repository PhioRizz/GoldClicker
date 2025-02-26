let gold = 0;
let minerCount = 0;
let minerProduction = 1;
let clickPower = 1;
let clickUpgradeCount = 0;
let clickUpgradeCost = 25;

let goldRushMultiplier = 1;
let goldRushCount = 0;
let goldRushCost = 50;

const upgrades = {
    miners: [
        { name: 'Basic Miner', baseCost: 10, production: 1, owned: 0, type: 'Gold/Sec' },
        { name: 'Pickaxe Upgrade', baseCost: 50, production: 5, owned: 0, type: 'Gold/Sec' },
        { name: 'Mining Cart', baseCost: 250, production: 25, owned: 0, type: 'Gold/Sec' },
        { name: 'Mining Drill', baseCost: 1000, production: 100, owned: 0, type: 'Gold/Sec' },
        { name: 'Underground Factory', baseCost: 5000, production: 500, owned: 0, type: 'Gold/Sec' },
        { name: 'Robotic Excavator', baseCost: 10000, production: 1000, owned: 0, type: 'Gold/Sec' },
        { name: 'AI Mining System', baseCost: 25000, production: 2500, owned: 0, type: 'Gold/Sec' },
        { name: 'Quantum Mining Network', baseCost: 50000, production: 5000, owned: 0, type: 'Gold/Sec' },
        { name: 'Nano-Miner Swarm', baseCost: 100000, production: 10000, owned: 0, type: 'Gold/Sec' },
        { name: 'Interdimensional Mine', baseCost: 250000, production: 25000, owned: 0, type: 'Gold/Sec' },
        { name: 'Solar Powered Mine', baseCost: 500000, production: 50000, owned: 0, type: 'Gold/Sec' },
        { name: 'Geothermal Extraction', baseCost: 750000, production: 75000, owned: 0, type: 'Gold/Sec' },
        { name: 'Asteroid Mining Vessel', baseCost: 1000000, production: 100000, owned: 0, type: 'Gold/Sec' },
        { name: 'Plasma Core Excavator', baseCost: 2500000, production: 250000, owned: 0, type: 'Gold/Sec' },
        { name: 'Neutron Star Harvester', baseCost: 5000000, production: 500000, owned: 0, type: 'Gold/Sec' },
        { name: 'Galactic Resource Network', baseCost: 10000000, production: 1000000, owned: 0, type: 'Gold/Sec' },
        { name: 'Dark Matter Collector', baseCost: 25000000, production: 2500000, owned: 0, type: 'Gold/Sec' },
        { name: 'Wormhole Mining Station', baseCost: 50000000, production: 5000000, owned: 0, type: 'Gold/Sec' },
        { name: 'Quantum Realm Extractor', baseCost: 100000000, production: 10000000, owned: 0, type: 'Gold/Sec' },
        { name: 'Omniversal Gold Generator', baseCost: 250000000, production: 25000000, owned: 0, type: 'Gold/Sec' },
        { name: 'Antimatter Excavator', baseCost: 100000000, production: 10000000, owned: 0, type: 'Gold/Sec' },
        { name: 'Tachyon Mining Platform', baseCost: 250000000, production: 25000000, owned: 0, type: 'Gold/Sec' },
        { name: 'Quantum Resonance Drill', baseCost: 500000000, production: 50000000, owned: 0, type: 'Gold/Sec' },
        { name: 'Hyperdimensional Extraction Unit', baseCost: 1000000000, production: 100000000, owned: 0, type: 'Gold/Sec' },
        { name: 'Cosmic Energy Harvester', baseCost: 2500000000, production: 250000000, owned: 0, type: 'Gold/Sec' },
        { name: 'Neutrino Extractor', baseCost: 5000000000, production: 5000000, owned: 0, type: 'Gold/Sec' },
        { name: 'Graviton Collector', baseCost: 10000000000, production: 10000000, owned: 0, type: 'Gold/Sec' },
        { name: 'Quantum Resonance Mine', baseCost: 25000000000, production: 25000000, owned: 0, type: 'Gold/Sec' },
        { name: 'Zero-Point Energy Harvester', baseCost: 50000000000, production: 50000000, owned: 0, type: 'Gold/Sec' },
        { name: 'Hyperspace Mining Grid', baseCost: 100000000000, production: 100000000, owned: 0, type: 'Gold/Sec' },
        { name: 'Quantum Particle Extractor', baseCost: 500000000000, production: 250000000, owned: 0, type: 'Gold/Sec' },
        { name: 'Stellar Core Harvester', baseCost: 1000000000000, production: 500000000, owned: 0, type: 'Gold/Sec' },
        { name: 'Pulsar Energy Converter', baseCost: 2500000000000, production: 1000000000, owned: 0, type: 'Gold/Sec' },
        { name: 'Black Hole Mining Array', baseCost: 5000000000000, production: 2500000000, owned: 0, type: 'Gold/Sec' },
        { name: 'Quantum Foam Extractor', baseCost: 10000000000000, production: 5000000000, owned: 0, type: 'Gold/Sec' },
        { name: 'Dimensional Rift Miner', baseCost: 25000000000000, production: 10000000000, owned: 0, type: 'Gold/Sec' },
        { name: 'Quantum Entanglement Harvester', baseCost: 50000000000000, production: 25000000000, owned: 0, type: 'Gold/Sec' },
        { name: 'Cosmic String Extractor', baseCost: 100000000000000, production: 50000000000, owned: 0, type: 'Gold/Sec' },
        { name: 'Quantum Vacuum Miner', baseCost: 250000000000000, production: 100000000000, owned: 0, type: 'Gold/Sec' },
        { name: 'Zero-Point Energy Harvester', baseCost: 500000000000000, production: 250000000000, owned: 0, type: 'Gold/Sec' }
    ],
    clickUpgrades: [
        { name: 'Wooden Hammer', baseCost: 25, power: 2, owned: 0, type: 'Gold/Click' },
        { name: 'Iron Pickaxe', baseCost: 100, power: 5, owned: 0, type: 'Gold/Click' },
        { name: 'Steel Chisel', baseCost: 500, power: 25, owned: 0, type: 'Gold/Click' },
        { name: 'Diamond Drill', baseCost: 2500, power: 100, owned: 0, type: 'Gold/Click' },
        { name: 'Quantum Extractor', baseCost: 10000, power: 500, owned: 0, type: 'Gold/Click' },
        { name: 'Plasma Cutter', baseCost: 25000, power: 1000, owned: 0, type: 'Gold/Click' },
        { name: 'Nano-Fabricator', baseCost: 50000, power: 2500, owned: 0, type: 'Gold/Click' },
        { name: 'Dimensional Hammer', baseCost: 100000, power: 5000, owned: 0, type: 'Gold/Click' },
        { name: 'Cosmic Resonator', baseCost: 250000, power: 10000, owned: 0, type: 'Gold/Click' },
        { name: 'Reality Manipulator', baseCost: 500000, power: 25000, owned: 0, type: 'Gold/Click' },
        { name: 'Chronokinetic Hammer', baseCost: 1000000, power: 50000, owned: 0, type: 'Gold/Click' },
        { name: 'Quantum Entanglement Pickaxe', baseCost: 2500000, power: 100000, owned: 0, type: 'Gold/Click' },
        { name: 'Gravity Manipulation Tool', baseCost: 5000000, power: 250000, owned: 0, type: 'Gold/Click' },
        { name: 'Singularity Extractor', baseCost: 10000000, power: 500000, owned: 0, type: 'Gold/Click' },
        { name: 'Multidimensional Chisel', baseCost: 25000000, power: 1000000, owned: 0, type: 'Gold/Click' },
        { name: 'Temporal Resonance Drill', baseCost: 50000000, power: 2500000, owned: 0, type: 'Gold/Click' },
        { name: 'Cosmic String Harvester', baseCost: 100000000, power: 5000000, owned: 0, type: 'Gold/Click' },
        { name: 'Hyperspace Mining Probe', baseCost: 250000000, power: 10000000, owned: 0, type: 'Gold/Click' },
        { name: 'Reality Warping Extractor', baseCost: 500000000, power: 25000000, owned: 0, type: 'Gold/Click' },
        { name: 'Omnipotent Gold Synthesizer', baseCost: 1000000000, power: 50000000, owned: 0, type: 'Gold/Click' },
        { name: 'Neutron Hammer', baseCost: 1000000000, power: 100000000, owned: 0, type: 'Gold/Click' },
        { name: 'Quantum Entanglement Drill', baseCost: 2500000000, power: 250000000, owned: 0, type: 'Gold/Click' },
        { name: 'Temporal Resonance Extractor', baseCost: 5000000000, power: 500000000, owned: 0, type: 'Gold/Click' },
        { name: 'Multiversal Impact Tool', baseCost: 10000000000, power: 1000000000, owned: 0, type: 'Gold/Click' },
        { name: 'Omnipotent Click Synthesizer', baseCost: 25000000000, power: 2500000000, owned: 0, type: 'Gold/Click' },
        { name: 'Gravitational Wave Hammer', baseCost: 25000000000, power: 5000000000, owned: 0, type: 'Gold/Click' },
        { name: 'Quantum Entanglement Splitter', baseCost: 50000000000, power: 10000000000, owned: 0, type: 'Gold/Click' },
        { name: 'Multiversal Impact Resonator', baseCost: 100000000000, power: 25000000000, owned: 0, type: 'Gold/Click' },
        { name: 'Dark Energy Manipulation Tool', baseCost: 250000000000, power: 50000000000, owned: 0, type: 'Gold/Click' },
        { name: 'Cosmic String Vibration Amplifier', baseCost: 500000000000, power: 100000000000, owned: 0, type: 'Gold/Click' },
        { name: 'Quantum Probability Manipulator', baseCost: 5000000000000, power: 250000000, owned: 0, type: 'Gold/Click' },
        { name: 'Reality Distortion Hammer', baseCost: 10000000000000, power: 500000000, owned: 0, type: 'Gold/Click' },
        { name: 'Quantum Tunneling Chisel', baseCost: 25000000000000, power: 1000000000, owned: 0, type: 'Gold/Click' },
        { name: 'Cosmic Resonance Pickaxe', baseCost: 50000000000000, power: 2500000000, owned: 0, type: 'Gold/Click' },
        { name: 'Hyperdimensional Impact Tool', baseCost: 100000000000000, power: 5000000000, owned: 0, type: 'Gold/Click' },
        { name: 'Quantum Entanglement Splitter', baseCost: 250000000000000, power: 10000000000, owned: 0, type: 'Gold/Click' },
        { name: 'Temporal Resonance Extractor', baseCost: 500000000000000, power: 25000000000, owned: 0, type: 'Gold/Click' },
        { name: 'Multiverse Impact Amplifier', baseCost: 1000000000000000, power: 50000000000, owned: 0, type: 'Gold/Click' },
        { name: 'Quantum Consciousness Forge', baseCost: 2500000000000000, power: 100000000000, owned: 0, type: 'Gold/Click' },
        { name: 'Omniversal Click Resonator', baseCost: 5000000000000000, power: 250000000000, owned: 0, type: 'Gold/Click' },
        { name: 'Quantum Probability Matrix Enhancer', baseCost: 250000000000000, power: 500000000, owned: 0, type: 'Gold/Click' },
        { name: 'Temporal Flux Stabilization Protocol', baseCost: 10000000000000, power: 1000000000, owned: 0, type: 'Gold/Click' },
        { name: 'Multidimensional Impact Resonator', baseCost: 250000000000, power: 2500000000, owned: 0, type: 'Gold/Click' },
        { name: 'Dark Energy Manipulation Tool', baseCost: 500000000000, power: 5000000000, owned: 0, type: 'Gold/Click' },
        { name: 'Cosmic String Vibration Amplifier', baseCost: 1000000000000, power: 10000000000, owned: 0, type: 'Gold/Click' },
        { name: 'Quantum Probability Manipulator', baseCost: 2500000000000, power: 25000000000, owned: 0, type: 'Gold/Click' },
        { name: 'Reality Distortion Hammer', baseCost: 5000000000000, power: 50000000000, owned: 0, type: 'Gold/Click' },
        { name: 'Quantum Tunneling Chisel', baseCost: 10000000000000, power: 100000000000, owned: 0, type: 'Gold/Click' },
        { name: 'Cosmic Resonance Pickaxe', baseCost: 25000000000000, power: 250000000000, owned: 0, type: 'Gold/Click' },
        { name: 'Hyperdimensional Impact Tool', baseCost: 50000000000000, power: 500000000000, owned: 0, type: 'Gold/Click' },
        { name: 'Quantum Entanglement Splitter', baseCost: 100000000000000, power: 1000000000000, owned: 0, type: 'Gold/Click' },
        { name: 'Temporal Resonance Extractor', baseCost: 250000000000000, power: 2500000000000, owned: 0, type: 'Gold/Click' },
        { name: 'Multiverse Impact Amplifier', baseCost: 500000000000000, power: 5000000000000, owned: 0, type: 'Gold/Click' },
        { name: 'Quantum Consciousness Forge', baseCost: 1000000000000000, power: 10000000000000, owned: 0, type: 'Gold/Click' },
        { name: 'Omniversal Click Resonator', baseCost: 2500000000000000, power: 25000000000000, owned: 0, type: 'Gold/Click' }
    ],
    goldMultipliers: [
        { name: 'Local Gold Rush', baseCost: 50, multiplier: 1.5, owned: 0, type: 'Multiplier' },
        { name: 'Regional Boom', baseCost: 250, multiplier: 2, owned: 0, type: 'Multiplier' },
        { name: 'National Goldfield', baseCost: 1000, multiplier: 3, owned: 0, type: 'Multiplier' },
        { name: 'Continental Discovery', baseCost: 5000, multiplier: 5, owned: 0, type: 'Multiplier' },
        { name: 'Global Gold Market', baseCost: 25000, multiplier: 10, owned: 0, type: 'Multiplier' },
        { name: 'Quantum Market Link', baseCost: 50000, multiplier: 15, owned: 0, type: 'Multiplier' },
        { name: 'Cosmic Economic Nexus', baseCost: 100000, multiplier: 25, owned: 0, type: 'Multiplier' },
        { name: 'Interdimensional Trade', baseCost: 250000, multiplier: 50, owned: 0, type: 'Multiplier' },
        { name: 'Multiversal Gold Exchange', baseCost: 500000, multiplier: 100, owned: 0, type: 'Multiplier' },
        { name: 'Omnipotent Market Control', baseCost: 1000000, multiplier: 250, owned: 0, type: 'Multiplier' },
        { name: 'Quantum Economic Network', baseCost: 2500000, multiplier: 500, owned: 0, type: 'Multiplier' },
        { name: 'Temporal Market Synchronization', baseCost: 5000000, multiplier: 1000, owned: 0, type: 'Multiplier' },
        { name: 'Galactic Trade Federation', baseCost: 10000000, multiplier: 2500, owned: 0, type: 'Multiplier' },
        { name: 'Hyperspace Economic Nexus', baseCost: 25000000, multiplier: 5000, owned: 0, type: 'Multiplier' },
        { name: 'Multiversal Resource Exchange', baseCost: 50000000, multiplier: 10000, owned: 0, type: 'Multiplier' },
        { name: 'Dark Matter Market Manipulation', baseCost: 100000000, multiplier: 25000, owned: 0, type: 'Multiplier' },
        { name: 'Quantum Probability Amplifier', baseCost: 250000000, multiplier: 50000, owned: 0, type: 'Multiplier' },
        { name: 'Cosmic Consciousness Market', baseCost: 500000000, multiplier: 100000, owned: 0, type: 'Multiplier' },
        { name: 'Omniversal Economic Singularity', baseCost: 1000000000, multiplier: 250000, owned: 0, type: 'Multiplier' },
        { name: 'Reality Forge Economic Protocol', baseCost: 2500000000, multiplier: 500000, owned: 0, type: 'Multiplier' },
        { name: 'Quantum Probability Enhancer', baseCost: 5000000000, multiplier: 750000, owned: 0, type: 'Multiplier' },
        { name: 'Cosmic Resonance Amplifier', baseCost: 10000000000, multiplier: 1000000, owned: 0, type: 'Multiplier' },
        { name: 'Multiversal Trade Network', baseCost: 25000000000, multiplier: 2500000, owned: 0, type: 'Multiplier' },
        { name: 'Dark Energy Market', baseCost: 50000000000, multiplier: 5000000, owned: 0, type: 'Multiplier' },
        { name: 'Omniversal Economic Core', baseCost: 100000000000, multiplier: 10000000, owned: 0, type: 'Multiplier' },
        { name: 'Quantum Probability Inverter', baseCost: 250000000000, multiplier: 15000000, owned: 0, type: 'Multiplier' },
        { name: 'Hyperspace Market Resonance', baseCost: 500000000000, multiplier: 25000000, owned: 0, type: 'Multiplier' },
        { name: 'Temporal Economic Synchronizer', baseCost: 1000000000000, multiplier: 50000000, owned: 0, type: 'Multiplier' },
        { name: 'Multiversal Trade Quantum Link', baseCost: 2500000000000, multiplier: 100000000, owned: 0, type: 'Multiplier' },
        { name: 'Omniversal Resource Harmonizer', baseCost: 5000000000000, multiplier: 250000000, owned: 0, type: 'Multiplier' },
        { name: 'Quantum Market Synchronizer', baseCost: 2500000000000, multiplier: 500000, owned: 0, type: 'Multiplier' },
        { name: 'Temporal Trade Network', baseCost: 5000000000000, multiplier: 1000000, owned: 0, type: 'Multiplier' },
        { name: 'Hyperdimensional Economic Nexus', baseCost: 10000000000000, multiplier: 2500000, owned: 0, type: 'Multiplier' },
        { name: 'Quantum Probability Market', baseCost: 25000000000000, multiplier: 5000000, owned: 0, type: 'Multiplier' },
        { name: 'Cosmic Consciousness Exchange', baseCost: 50000000000000, multiplier: 10000000, owned: 0, type: 'Multiplier' },
        { name: 'Multiversal Resource Harmonizer', baseCost: 100000000000000, multiplier: 25000000, owned: 0, type: 'Multiplier' },
        { name: 'Quantum Entanglement Market', baseCost: 250000000000000, multiplier: 50000000, owned: 0, type: 'Multiplier' },
        { name: 'Temporal Flux Economic Stabilizer', baseCost: 500000000000000, multiplier: 100000000, owned: 0, type: 'Multiplier' },
        { name: 'Omniversal Trade Synchronizer', baseCost: 1000000000000000, multiplier: 250000000, owned: 0, type: 'Multiplier' },
        { name: 'Quantum Resonance Market Link', baseCost: 2500000000000000, multiplier: 500000000, owned: 0, type: 'Multiplier' }
    ],
    specialUpgrades: [
        { name: 'Efficiency Training', baseCost: 100, effect: 'reduceCosts', owned: 0, type: 'Special' },
        { name: 'Gold Compressor', baseCost: 500, effect: 'increaseStorage', owned: 0, type: 'Special' },
        { name: 'Market Manipulation', baseCost: 2500, effect: 'improveRates', owned: 0, type: 'Special' },
        { name: 'Advanced Geology', baseCost: 10000, effect: 'revealSecrets', owned: 0, type: 'Special' },
        { name: 'Quantum Resonance', baseCost: 50000, effect: 'unlockMasterMode', owned: 0, type: 'Special' },
        { name: 'Nano-Tech Optimization', baseCost: 100000, effect: 'enhanceEfficiency', owned: 0, type: 'Special' },
        { name: 'Quantum Algorithm', baseCost: 250000, effect: 'maximizeProduction', owned: 0, type: 'Special' },
        { name: 'Dimensional Synchronization', baseCost: 500000, effect: 'unlockHiddenResources', owned: 0, type: 'Special' },
        { name: 'Cosmic Consciousness', baseCost: 1000000, effect: 'transcendLimitations', owned: 0, type: 'Special' },
        { name: 'Reality Forge', baseCost: 2500000, effect: 'ultimateTransformation', owned: 0, type: 'Special' },
        { name: 'Quantum Probability Calibrator', baseCost: 5000000, effect: 'quantumOptimization', owned: 0, type: 'Special' },
        { name: 'Temporal Resource Synchronizer', baseCost: 10000000, effect: 'timeWarp', owned: 0, type: 'Special' },
        { name: 'Multidimensional Energy Converter', baseCost: 25000000, effect: 'dimensionalShift', owned: 0, type: 'Special' },
        { name: 'Cosmic Resonance Amplifier', baseCost: 50000000, effect: 'cosmicAlignment', owned: 0, type: 'Special' },
        { name: 'Hyperdimensional Resource Mapper', baseCost: 100000000, effect: 'hyperSpaceMapping', owned: 0, type: 'Special' },
        { name: 'Dark Matter Efficiency Enhancer', baseCost: 250000000, effect: 'darkMatterOptimization', owned: 0, type: 'Special' },
        { name: 'Quantum Entanglement Network', baseCost: 500000000, effect: 'quantumNetworking', owned: 0, type: 'Special' },
        { name: 'Omniversal Resource Calibrator', baseCost: 1000000000, effect: 'omniversalSync', owned: 0, type: 'Special' },
        { name: 'Reality Warping Resource Forge', baseCost: 2500000000, effect: 'realityManipulation', owned: 0, type: 'Special' },
        { name: 'Cosmic Consciousness Integrator', baseCost: 5000000000, effect: 'ultimateTranscendence', owned: 0, type: 'Special' },
        { name: 'Quantum Probability Matrix', baseCost: 10000000000, effect: 'quantumOptimization', owned: 0, type: 'Special' },
        { name: 'Multiversal Energy Converter', baseCost: 25000000000, effect: 'dimensionalShift', owned: 0, type: 'Special' },
        { name: 'Cosmic Consciousness Amplifier', baseCost: 50000000000, effect: 'cosmicAlignment', owned: 0, type: 'Special' },
        { name: 'Temporal Synchronization Engine', baseCost: 100000000000, effect: 'timeWarp', owned: 0, type: 'Special' },
        { name: 'Omnipotent Reality Forge', baseCost: 250000000000, effect: 'ultimateTranscendence', owned: 0, type: 'Special' },
        { name: 'Quantum Coherence Engine', baseCost: 500000000000, effect: 'quantumSynchronization', owned: 0, type: 'Special' },
        { name: 'Hyperspace Resonance Calibrator', baseCost: 1000000000000, effect: 'dimensionalCalibration', owned: 0, type: 'Special' },
        { name: 'Temporal Flux Stabilizer', baseCost: 2500000000000, effect: 'temporalAlignment', owned: 0, type: 'Special' },
        { name: 'Multiversal Energy Transformer', baseCost: 5000000000000, effect: 'energyTransmutation', owned: 0, type: 'Special' },
        { name: 'Omniversal Consciousness Gateway', baseCost: 10000000000000, effect: 'ultimateTranscendence', owned: 0, type: 'Special' },
        { name: 'Quantum Probability Calibration', baseCost: 10000000000, effect: 'quantumOptimization', owned: 0, type: 'Special' },
        { name: 'Temporal Synchronization Engine', baseCost: 25000000000, effect: 'timeWarp', owned: 0, type: 'Special' },
        { name: 'Multidimensional Energy Transformer', baseCost: 50000000000, effect: 'dimensionalShift', owned: 0, type: 'Special' },
        { name: 'Cosmic Consciousness Amplifier', baseCost: 100000000000, effect: 'cosmicAlignment', owned: 0, type: 'Special' },
        { name: 'Quantum Entanglement Network', baseCost: 250000000000, effect: 'quantumNetworking', owned: 0, type: 'Special' },
        { name: 'Omniversal Resource Calibrator', baseCost: 500000000000, effect: 'omniversalSync', owned: 0, type: 'Special' },
        { name: 'Reality Warping Resource Forge', baseCost: 1000000000000, effect: 'realityManipulation', owned: 0, type: 'Special' },
        { name: 'Hyperdimensional Consciousness Integrator', baseCost: 2500000000000, effect: 'ultimateTranscendence', owned: 0, type: 'Special' },
        { name: 'Quantum Probability Matrix Enhancer', baseCost: 5000000000000, effect: 'quantumOptimization', owned: 0, type: 'Special' },
        { name: 'Temporal Flux Stabilization Protocol', baseCost: 10000000000000, effect: 'temporalAlignment', owned: 0, type: 'Special' }
    ]
};

function abbreviateNumber(num) {
    const abbreviations = [
        { value: 1e21, symbol: 'Sx' },   // Sextillion
        { value: 1e18, symbol: 'Qi' },   // Quintillion
        { value: 1e15, symbol: 'Qd' },   // Quadrillion
        { value: 1e12, symbol: 'T' },    // Trillion
        { value: 1e9, symbol: 'B' },     // Billion
        { value: 1e6, symbol: 'M' },     // Million
        { value: 1e3, symbol: 'K' }      // Thousand
    ];

    for (let abbr of abbreviations) {
        if (num >= abbr.value) {
            return (num / abbr.value).toFixed(1) + abbr.symbol;
        }
    }

    return Math.floor(num).toString();
}

function calculateUpgradeCost(baseUpgrade) {
    const scaleFactor = 1.5 + (baseUpgrade.owned * 0.05); // Slightly more dynamic scaling
    return Math.round(baseUpgrade.baseCost * Math.pow(scaleFactor, baseUpgrade.owned + 1));
}

function clickGold() {
    gold += clickPower * goldRushMultiplier;
    updateDisplay();
}

function buyUpgrade(category, index) {
    const upgrade = upgrades[category][index];
    const upgradeCost = calculateUpgradeCost(upgrade);
    
    if (gold >= upgradeCost) {
        gold -= upgradeCost;
        
        switch(category) {
            case 'miners':
                minerCount++;
                minerProduction += upgrade.production;
                break;
            case 'clickUpgrades':
                clickPower += upgrade.power;
                break;
            case 'goldMultipliers':
                goldRushMultiplier *= upgrade.multiplier;
                break;
            case 'specialUpgrades':
                // Special upgrade logic can be added here with more complex effects
                break;
        }
        
        upgrade.owned++;
        upgrade.baseCost = upgradeCost;
        updateDisplay();
    }
}

function updateDisplay() {
    const goldAmountElement = document.getElementById('gold-amount');

    if (goldAmountElement) {
        goldAmountElement.textContent = abbreviateNumber(gold);
    }
    
    updateUpgradeList();
}

function updateUpgradeList() {
    const container = document.getElementById('all-upgrades');
    if (!container) return;
    
    // Combine all upgrades into a single list
    let allUpgrades = [
        ...upgrades.miners, 
        ...upgrades.clickUpgrades, 
        ...upgrades.goldMultipliers, 
        ...upgrades.specialUpgrades
    ];

    // Sort by base cost
    allUpgrades.sort((a, b) => a.baseCost - b.baseCost);
    
    container.innerHTML = allUpgrades.map((upgrade, index) => `
        <div class="upgrade-item">
            <div class="upgrade-details">
                <span class="upgrade-name">${upgrade.name}</span>
                <span class="upgrade-description">${upgrade.type}</span>
            </div>
            <button onclick="buyUpgrade('${findUpgradeCategory(upgrade)}', ${findUpgradeIndex(upgrade)})">
                Buy (Cost: ${abbreviateNumber(calculateUpgradeCost(upgrade))})
            </button>
            <span>${abbreviateNumber(upgrade.owned)}</span>
        </div>
    `).join('');
}

// Helper function to find the category of an upgrade
function findUpgradeCategory(upgrade) {
    for (let category in upgrades) {
        if (upgrades[category].includes(upgrade)) {
            return category;
        }
    }
    return null;
}

// Helper function to find the index of an upgrade within its category
function findUpgradeIndex(upgrade) {
    for (let category in upgrades) {
        const index = upgrades[category].indexOf(upgrade);
        if (index !== -1) {
            return index;
        }
    }
    return -1;
}

function autoProduction() {
    gold += minerCount * minerProduction;
    updateDisplay();
}

function initializeAndSortUpgrades() {
    // Sort each upgrade category by base cost
    Object.keys(upgrades).forEach(category => {
        upgrades[category].sort((a, b) => a.baseCost - b.baseCost);
    });
}

// Call this function when the page loads to ensure upgrades are sorted
document.addEventListener('DOMContentLoaded', () => {
    initializeAndSortUpgrades();
    
    const goldCoin = document.getElementById('gold-coin');
    if (goldCoin) {
        goldCoin.addEventListener('click', clickGold);
    }
    
    // Try to load saved game, if no save exists, start a new game
    if (!loadGame()) {
        updateDisplay();
    }
});

setInterval(autoProduction, 1000);

function saveGame() {
    const gameState = {
        gold: gold,
        minerCount: minerCount,
        minerProduction: minerProduction,
        clickPower: clickPower,
        goldRushMultiplier: goldRushMultiplier,
        upgrades: {}
    };

    // Save all upgrade categories
    for (let category in upgrades) {
        gameState.upgrades[category] = upgrades[category].map(upgrade => ({
            name: upgrade.name,
            baseCost: upgrade.baseCost,
            owned: upgrade.owned
        }));
    }

    try {
        localStorage.setItem('goldClickerSave', JSON.stringify(gameState));
        console.log('Game saved successfully');
    } catch (error) {
        console.error('Error saving game:', error);
    }
}

function loadGame() {
    try {
        const savedGame = localStorage.getItem('goldClickerSave');
        if (savedGame) {
            const gameState = JSON.parse(savedGame);

            // Restore basic game state
            gold = gameState.gold || 0;
            minerCount = gameState.minerCount || 0;
            minerProduction = gameState.minerProduction || 0;
            clickPower = gameState.clickPower || 1;
            goldRushMultiplier = gameState.goldRushMultiplier || 1;

            // Restore upgrades
            for (let category in upgrades) {
                if (gameState.upgrades && gameState.upgrades[category]) {
                    gameState.upgrades[category].forEach((savedUpgrade, index) => {
                        if (upgrades[category][index]) {
                            upgrades[category][index].owned = savedUpgrade.owned || 0;
                            upgrades[category][index].baseCost = savedUpgrade.baseCost || upgrades[category][index].baseCost;
                        }
                    });
                }
            }

            updateDisplay();
            console.log('Game loaded successfully');
            return true;
        }
    } catch (error) {
        console.error('Error loading game:', error);
    }
    return false;
}

function resetGame() {
    localStorage.removeItem('goldClickerSave');
    
    // Reset all game variables to initial state
    gold = 0;
    minerCount = 0;
    minerProduction = 1;
    clickPower = 1;
    goldRushMultiplier = 1;

    // Reset all upgrades
    for (let category in upgrades) {
        upgrades[category].forEach(upgrade => {
            upgrade.owned = 0;
            upgrade.baseCost = upgrade.baseCost; // Reset to original base cost
        });
    }

    updateDisplay();
    console.log('Game reset');
}

function autoSave() {
    saveGame();
}

setInterval(autoSave, 30000);