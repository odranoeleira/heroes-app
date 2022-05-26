import React, { useMemo } from "react";
import queryString from "query-string";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [values, handleInputChange] = useForm({
    searchText: q,
  });
  const { searchText } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  return (
    <>
      <h1>Búsquedas</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form className="d-grid" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Buscar un héroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button className="btn btn-outline-primary mt-2" type="submit">
              {" "}
              Buscar...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4> Resultados</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-info">Buscar un héroe</div>
          ) : (
            heroesFiltered.length === 0 && (
              <div className="alert alert-danger">No hay Resultados: {q} </div>
            )
          )}
          {heroesFiltered.map((h) => (
            <HeroCard key={h.id} {...h} />
          ))}
        </div>
      </div>
    </>
  );
};
