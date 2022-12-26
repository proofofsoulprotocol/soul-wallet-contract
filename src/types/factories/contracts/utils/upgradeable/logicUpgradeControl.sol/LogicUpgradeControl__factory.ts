/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  LogicUpgradeControl,
  LogicUpgradeControlInterface,
} from "../../../../../contracts/utils/upgradeable/logicUpgradeControl.sol/LogicUpgradeControl";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newLogic",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "activateTime",
        type: "uint64",
      },
    ],
    name: "PreUpgrade",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "logicUpgradeInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "upgradeDelay",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "activateTime",
            type: "uint64",
          },
          {
            internalType: "address",
            name: "pendingImplementation",
            type: "address",
          },
          {
            internalType: "uint256[50]",
            name: "__gap",
            type: "uint256[50]",
          },
        ],
        internalType: "struct ILogicUpgradeControl.UpgradeLayout",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610457806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063d55ec6971461003b578063f2523e1814610045575b600080fd5b610043610063565b005b61004d61027b565b60405161005a91906103a7565b60405180910390f35b7ff8a710ee80f631cf345664111f4640826662740a1425b833ce4638e14a4e7e428054640100000000900467ffffffffffffffff16158015906100ba575080544264010000000090910467ffffffffffffffff1610155b61014b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4c6f67696355706772616465436f6e74726f6c3a20757067726164652064656c60448201527f617920686173206e6f7420656c6170736564000000000000000000000000000060648201526084015b60405180910390fd5b80546c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff16803b610201576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603960248201527f4c6f67696355706772616465436f6e74726f6c3a206e657720696d706c656d6560448201527f6e746174696f6e206973206e6f74206120636f6e7472616374000000000000006064820152608401610142565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc81905560405173ffffffffffffffffffffffffffffffffffffffff821681527fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b9060200160405180910390a150805463ffffffff169055565b61028361035a565b604080516080810182527ff8a710ee80f631cf345664111f4640826662740a1425b833ce4638e14a4e7e42805463ffffffff81168352640100000000810467ffffffffffffffff1660208401526c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff168284015282516106408101938490526000936060840191907ff8a710ee80f631cf345664111f4640826662740a1425b833ce4638e14a4e7e439060329082845b81548152602001906001019080831161033657505050919092525091949350505050565b604080516080810182526000808252602082018190529181019190915260608101610383610388565b905290565b6040518061064001604052806032906020820280368337509192915050565b60006106a08201905063ffffffff8351168252602067ffffffffffffffff81850151168184015273ffffffffffffffffffffffffffffffffffffffff604085015116604084015260608401516060840160005b6032811015610417578251825291830191908301906001016103fa565b505050509291505056fea264697066735822122085004509a47a9060402fb012038df02c82d85822b7290c405255c1f8c478182b64736f6c63430008110033";

type LogicUpgradeControlConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LogicUpgradeControlConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LogicUpgradeControl__factory extends ContractFactory {
  constructor(...args: LogicUpgradeControlConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LogicUpgradeControl> {
    return super.deploy(overrides || {}) as Promise<LogicUpgradeControl>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LogicUpgradeControl {
    return super.attach(address) as LogicUpgradeControl;
  }
  override connect(signer: Signer): LogicUpgradeControl__factory {
    return super.connect(signer) as LogicUpgradeControl__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LogicUpgradeControlInterface {
    return new utils.Interface(_abi) as LogicUpgradeControlInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LogicUpgradeControl {
    return new Contract(address, _abi, signerOrProvider) as LogicUpgradeControl;
  }
}