export const idlFactory = ({ IDL }) => {
  const PlayerName = IDL.Text;
  const Score = IDL.Nat;
  const GamesPlayed = IDL.Nat;
  const PlayerView__1 = IDL.Record({
    'name' : PlayerName,
    'score' : Score,
    'games_played' : GamesPlayed,
  });
  const ListResult = IDL.Record({
    'top' : IDL.Vec(PlayerView__1),
    'available' : IDL.Vec(PlayerView__1),
    'recent' : IDL.Vec(PlayerView__1),
  });
  const ColorCount = IDL.Record({ 'black' : IDL.Nat, 'white' : IDL.Nat });
  const MoveResult = IDL.Variant({
    'OK' : IDL.Null,
    'Pass' : IDL.Null,
    'GameNotStarted' : IDL.Null,
    'IllegalColor' : IDL.Null,
    'IllegalMove' : IDL.Null,
    'GameOver' : ColorCount,
    'GameNotFound' : IDL.Null,
    'InvalidColor' : IDL.Null,
    'InvalidCoordinate' : IDL.Null,
  });
  const PlayerView = IDL.Record({
    'name' : PlayerName,
    'score' : Score,
    'games_played' : GamesPlayed,
  });
  const RegistrationError = IDL.Variant({
    'NameAlreadyExists' : IDL.Null,
    'InvalidName' : IDL.Null,
  });
  const Result_1 = IDL.Variant({
    'ok' : PlayerView,
    'err' : RegistrationError,
  });
  const Color = IDL.Variant({ 'black' : IDL.Null, 'white' : IDL.Null });
  const GameView = IDL.Record({
    'result' : IDL.Opt(ColorCount),
    'moves' : IDL.Vec(IDL.Nat8),
    'next' : Color,
    'dimension' : IDL.Nat,
    'black' : IDL.Tuple(IDL.Opt(IDL.Null), PlayerName),
    'board' : IDL.Text,
    'white' : IDL.Tuple(IDL.Opt(IDL.Null), PlayerName),
  });
  const StartError = IDL.Variant({
    'NoSelfGame' : IDL.Null,
    'PlayerNotFound' : IDL.Null,
    'InvalidOpponentName' : IDL.Null,
    'OpponentInAnotherGame' : IDL.Null,
  });
  const Result = IDL.Variant({ 'ok' : GameView, 'err' : StartError });
  return IDL.Service({
    'list' : IDL.Func([], [ListResult], ['query']),
    'move' : IDL.Func([IDL.Int, IDL.Int], [MoveResult], []),
    'register' : IDL.Func([IDL.Text], [Result_1], []),
    'start' : IDL.Func([IDL.Text, IDL.Nat], [Result], []),
    'view' : IDL.Func([], [IDL.Opt(GameView)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
