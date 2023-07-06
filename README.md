# Decentralized Cupcake Vending Machine

This quickstart is for web developers who want to start building decentralized applications (dApps) using Arbitrum. It makes no assumptions about your prior experience with Ethereum, Arbitrum, or Solidity. Familiarity with Javascript and yarn is expected. If you're new to Ethereum, consider studying the Ethereum documentation before proceeding.

## What we're building

We're going to build a digital cupcake vending machine using Solidity smart contracts. Our vending machine will follow two rules:

1. The vending machine will distribute a cupcake to anyone who hasn't recently received one.
2. The vending machine's rules can't be changed by anyone.

Here's our vending machine implemented with Javascript:


FREE CUPCAKES
WEB2
NAME
Enter name
Cupcake please!
Refresh balance
🧁
Cupcake balance: 0


Note that although this vending machine appears to follow the rules, it doesn't follow them as much as we'd like. The vending machine's business logic and data are hosted by a centralized service provider. We're trusting that this service provider isn't malicious, but:

- Our centralized service provider can deny access to particular users.
- A malicious actor can change the rules of the vending machine at any time, for example, to give their friends extra cupcakes.

Centralized third-party intermediaries represent a single point of failure that malicious actors may become incentivized to exploit. To mitigate this type of risk, we can decentralize our vending machine's business logic and data, rendering this type of exploitation infeasible.

This is Arbitrum's core value proposition to you, dear developer. Arbitrum makes it easy for you to deploy your vending machines to Ethereum's permissionless, trustless, decentralized network of nodes while keeping costs low for you and your users.

Let's implement the "web3" version of the above vending machine using Arbitrum.

## Prerequisites

- **VS Code:** The IDE we'll use to build our vending machine. See [code.visualstudio.com](https://code.visualstudio.com) to install.
- **Metamask:** The wallet we'll use to interact with our vending machine. See [metamask.io](https://metamask.io) to install.
- **Yarn:** The package manager we'll use to install our dependencies. See [yarnpkg.com](https://yarnpkg.com) to install.

We'll install the rest of our dependencies as we go.

## Ethereum and Arbitrum in a nutshell

**Ethereum**
- Ethereum is a decentralized network of nodes that use Ethereum's client software (like Offchain's Prysm) to maintain a public blockchain data structure.
- The data within Ethereum's blockchain data structure changes one transaction at a time.
- Smart contracts are small programs that execute transactions according to predefined rules. Ethereum's nodes host and execute smart contracts.
- You can use smart contracts to build decentralized apps (dApps) that use Ethereum's network to process transactions and store data.
- DApps let users carry their data and identity between applications without having to trust centralized service providers.
- People who run Ethereum validator nodes can earn $ETH for processing and validating transactions on behalf of users and dApps.
- These transactions can be expensive when the network is under heavy load.

**Arbitrum**
- Arbitrum is a suite of L2 scaling solutions for dApp developers.
- Arbitrum One is an L2 chain that implements the Arbitrum Rollup protocol.
- You

