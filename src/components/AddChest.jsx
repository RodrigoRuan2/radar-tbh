import { useState } from 'react'
import { CHEST_LEVELS } from '../utils/stages.js'
import '../styles/AddChest.css'

// Formulário para adicionar um novo card de baú.
// Não permite repetir nível: o cooldown do baú de chefe é global por nível
// no jogo, então dois timers do mesmo nível não fariam sentido. Os níveis
// já em uso são filtrados da lista.
function AddChest({ usedLevels, onAdd }) {
  const available = CHEST_LEVELS.filter((lv) => !usedLevels.includes(lv))
  const [level, setLevel] = useState(available[0] ?? CHEST_LEVELS[0])

  // Se o nível escolhido acabou de ser adicionado, cai para o próximo livre.
  const selected = available.includes(Number(level)) ? Number(level) : available[0]

  function handleSubmit(event) {
    event.preventDefault() // impede o recarregamento padrão da página
    if (selected === undefined) return
    onAdd(selected)
    const next = available.filter((lv) => lv !== selected)
    setLevel(next[0] ?? CHEST_LEVELS[0])
  }

  if (available.length === 0) {
    return <p className="add-chest__done">Todos os níveis de baú já estão na sua rotação. 🎉</p>
  }

  return (
    <form className="add-chest" onSubmit={handleSubmit}>
      <label className="add-chest__label">
        Nível do baú
        <select
          className="add-chest__select"
          value={selected}
          onChange={(e) => setLevel(Number(e.target.value))}
        >
          {available.map((lv) => (
            <option key={lv} value={lv}>
              Lv {lv}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" className="add-chest__button">
        + Adicionar baú
      </button>
    </form>
  )
}

export default AddChest
