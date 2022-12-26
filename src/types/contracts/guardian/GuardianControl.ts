/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface GuardianControlInterface extends utils.Interface {
  functions: {
    "guardianInfo()": FunctionFragment;
    "guardianProcess()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "guardianInfo" | "guardianProcess"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "guardianInfo",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "guardianProcess",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "guardianInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "guardianProcess",
    data: BytesLike
  ): Result;

  events: {
    "GuardianSet(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GuardianSet"): EventFragment;
}

export interface GuardianSetEventObject {
  newGuardian: string;
  oldGuardian: string;
}
export type GuardianSetEvent = TypedEvent<
  [string, string],
  GuardianSetEventObject
>;

export type GuardianSetEventFilter = TypedEventFilter<GuardianSetEvent>;

export interface GuardianControl extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GuardianControlInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    guardianInfo(
      overrides?: CallOverrides
    ): Promise<[string, string, BigNumber, number]>;

    guardianProcess(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  guardianInfo(
    overrides?: CallOverrides
  ): Promise<[string, string, BigNumber, number]>;

  guardianProcess(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    guardianInfo(
      overrides?: CallOverrides
    ): Promise<[string, string, BigNumber, number]>;

    guardianProcess(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "GuardianSet(address,address)"(
      newGuardian?: null,
      oldGuardian?: null
    ): GuardianSetEventFilter;
    GuardianSet(newGuardian?: null, oldGuardian?: null): GuardianSetEventFilter;
  };

  estimateGas: {
    guardianInfo(overrides?: CallOverrides): Promise<BigNumber>;

    guardianProcess(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    guardianInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    guardianProcess(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}