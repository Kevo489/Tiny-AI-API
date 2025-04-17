### `setModel(data, id?)`

Sets the model for the AI session. The model specifies which AI model should be used during the session, enabling different types of behavior or capabilities.

#### Parameters

| Name     | Type      | Description |
|----------|-----------|-------------|
| `data`   | `string`  | The model to be set. It must be a string representing the AI model. |
| `id`     | `string?` | *(Optional)* The session ID. If omitted, the currently selected session will be used. |

#### Returns

- This function does not return any value.

#### Behavior

- The method checks if `data` is a valid string. If it is, it will be set as the model for the session.
- It stores the model in the session history using `#_insertIntoHistory`.
- An event is emitted (`setModel`) with the model name and the session ID.

---

### `getModel(id?)`

Retrieves the model set for the AI session. If no model is set, it returns `null`.

#### Parameters

| Name     | Type      | Description |
|----------|-----------|-------------|
| `id`     | `string?` | *(Optional)* The session ID. If omitted, the currently selected session will be used. |

#### Returns

- **`string`**: The model set for the session if available.
- **`null`**: If no model is set for the session.

#### Behavior

- The method retrieves the session history data using the provided `id` or the currently selected session ID.
- It checks if a model is set and returns its value. If no model is found, it returns `null`.

---

Aqui está a documentação em **Markdown** para o método `getModels`, seguindo o mesmo estilo organizado e claro:

---

### `getModels(pageSize = 50, pageToken = null)`

Retrieves a list of available models for the AI session, optionally paginated.

#### Parameters

| Name         | Type              | Default | Description                                                                 |
|--------------|-------------------|---------|-----------------------------------------------------------------------------|
| `pageSize`   | `number`          | `50`    | The number of models to retrieve per page.                                 |
| `pageToken`  | `string \| null`  | `null`  | Token for retrieving the next page of models. If omitted, uses internal token. |

#### Returns

- **`Array`**: A list of models retrieved from the API.

#### Throws

- **`Error`**: If no model list API handler function (`#_getModels`) is defined.

#### Behavior

- Internally calls a user-defined private method `#_getModels` with the current API key, the page size, and a page token.
- If `pageToken` is `null`, it will fallback to the value in `this._nextModelsPageToken`.
- If the model-fetching logic is not configured (`#_getModels` is not a function), it throws an error.

#### Example

```js
const models = session.getModels(20);
// or
const nextPageModels = session.getModels(20, "eyJwYWdlIjoxfQ==");
```

> **Note:** This method assumes that an external function `#_getModels(apiKey, pageSize, pageToken)` is properly implemented to fetch model data.

---

### `getModelsList()`

Retrieves the list of models for the AI session.

#### Parameters

- **None** – This method does not take any parameters.

#### Returns

| Type  | Description                  |
|-------|------------------------------|
| `Array` | The list of models available for the AI session. |

#### Example

```js
const models = session.getModelsList();
console.log(models); // Outputs the list of models
```

---

### `getModelData(id)`

Retrieves model data from the list of models by searching for a specific model ID.

#### Parameters

| Name | Type   | Description                                  |
|------|--------|----------------------------------------------|
| `id` | `string` | The model data ID to search for in the models list. |

#### Returns

| Type    | Description                                 |
|---------|---------------------------------------------|
| `Object | null` | The model data if found, otherwise `null`. |

#### Example

```js
const modelData = session.getModelData('modelId123');
if (modelData) {
  console.log(modelData); // Outputs the model data if found
} else {
  console.log('Model not found');
}
```

---

### `existsModel(id)`

Checks if a model exists in the list of models by searching for a specific model ID.

#### Parameters

| Name | Type   | Description                                  |
|------|--------|----------------------------------------------|
| `id` | `string` | The model ID to check for in the models list. |

#### Returns

| Type    | Description                                 |
|---------|---------------------------------------------|
| `boolean` | `true` if the model exists, `false` otherwise. |

#### Example

```js
const isModelExists = session.existsModel('modelId123');
if (isModelExists) {
  console.log('Model exists!');
} else {
  console.log('Model not found.');
}
```

---

Qualquer outra dúvida ou ajuste, é só avisar!
