export default function List({ items }) {
    return (
      <ul>
        {items.map((item, index) => {
          if (typeof items === "string") {
            return (
              <div key={index}>
                <li>{item}</li>
              </div>
            );
          }
          return (
            <div key={index}>
              <li>{item.name}</li>
              <li>{item.age}</li>
            </div>
          );
        })}
      </ul>
    );
  }