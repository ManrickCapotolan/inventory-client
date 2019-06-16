// https://medium.com/@martin_hotell/improved-redux-type-safety-with-typescript-2-8-2c11a8062575
import { ActionCreatorsMapObject } from "redux";

interface Action<T extends string> {
  type: T
}

interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P
}

type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>

// conditional type for filtering actions in epics/effects
type ActionsOfType<ActionUnion, ActionType extends string> = ActionUnion extends Action<ActionType> ? ActionUnion : never
