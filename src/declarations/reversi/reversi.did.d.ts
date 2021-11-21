import type { Principal } from '@dfinity/principal';
export type Color = { 'black' : null } |
  { 'white' : null };
export interface ColorCount { 'black' : bigint, 'white' : bigint }
export interface GameView {
  'result' : [] | [ColorCount],
  'moves' : Array<number>,
  'next' : Color,
  'dimension' : bigint,
  'black' : [[] | [null], PlayerName],
  'board' : string,
  'white' : [[] | [null], PlayerName],
}
export type GamesPlayed = bigint;
export interface ListResult {
  'top' : Array<PlayerView__1>,
  'available' : Array<PlayerView__1>,
  'recent' : Array<PlayerView__1>,
}
export type MoveResult = { 'OK' : null } |
  { 'Pass' : null } |
  { 'GameNotStarted' : null } |
  { 'IllegalColor' : null } |
  { 'IllegalMove' : null } |
  { 'GameOver' : ColorCount } |
  { 'GameNotFound' : null } |
  { 'InvalidColor' : null } |
  { 'InvalidCoordinate' : null };
export type PlayerName = string;
export interface PlayerView {
  'name' : PlayerName,
  'score' : Score,
  'games_played' : GamesPlayed,
}
export interface PlayerView__1 {
  'name' : PlayerName,
  'score' : Score,
  'games_played' : GamesPlayed,
}
export type RegistrationError = { 'NameAlreadyExists' : null } |
  { 'InvalidName' : null };
export type Result = { 'ok' : GameView } |
  { 'err' : StartError };
export type Result_1 = { 'ok' : PlayerView } |
  { 'err' : RegistrationError };
export type Score = bigint;
export type StartError = { 'NoSelfGame' : null } |
  { 'PlayerNotFound' : null } |
  { 'InvalidOpponentName' : null } |
  { 'OpponentInAnotherGame' : null };
export interface _SERVICE {
  'list' : () => Promise<ListResult>,
  'move' : (arg_0: bigint, arg_1: bigint) => Promise<MoveResult>,
  'register' : (arg_0: string) => Promise<Result_1>,
  'start' : (arg_0: string, arg_1: bigint) => Promise<Result>,
  'view' : () => Promise<[] | [GameView]>,
}
