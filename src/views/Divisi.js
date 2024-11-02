import { Card, CardBody, CardTitle, Table, Button } from "reactstrap";
import { AddDivisi } from "./ui/Modal";
import { useEffect, useState } from "react";

const Divisi = () => {
  const [divisi, setDivisi] = useState([]);
  const getDivisi = JSON.parse(localStorage.getItem("divisis")) || [];

  useEffect(() => {
    setDivisi(getDivisi);
  }, []);

  const removeDivisi = (index) => {
    const updatedDivisi = divisi.filter((_, i) => i !== index);
    localStorage.setItem("divisis", JSON.stringify(updatedDivisi));
    setDivisi(updatedDivisi);
  };

  return (
    <div>
      <Card>
        <CardBody>
          <div className="d-flex gap-5">
            <CardTitle tag="h5">Data Divisi</CardTitle>
            <AddDivisi />
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>No</th>
                <th>Kode Divisi</th>
                <th>Nama Divisi</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {divisi.map(({ divisi }, index) => (
                <tr key={index} className="border-top">
                  <td>{index + 1}</td>
                  <td>{"DIV0" + (index + 1)}</td>
                  <td>{divisi}</td>
                  <td>
                    <Button onClick={() => removeDivisi(index)}>
                      <i className="bi bi-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default Divisi;
