/// <reference types="mocha" />
import { ObservableQuery } from '../../src/core/ObservableQuery';
import { ApolloQueryResult } from '../../src/core/types';
import { Subscription } from '../../src/util/Observable';
export default function subscribeAndCount(done: MochaDone, observable: ObservableQuery<any>, cb: (handleCount: number, result: ApolloQueryResult<any>) => any): Subscription;
