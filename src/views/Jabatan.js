import { Card, CardBody, CardTitle, Table, Button } from "reactstrap";
import { AddJabatan } from "./ui/Modal";
import { useEffect, useState } from "react";

const Jabatan = () => {
  const [jabatans, setJabatans] = useState([]);

  const getJabatan = JSON.parse(localStorage.getItem("jabatans")) || [];
  useEffect(() => {
    setJabatans(getJabatan);
  }, []);

  const removeUser = (index) => {
    const updatedJabatan = jabatans.filter((_, i) => i !== index);
    localStorage.setItem("jabatans", JSON.stringify(updatedJabatan));
    setJabatans(updatedJabatan);
  };

  return (
    <div>
      <Card>
        <CardBody>
          <div className="d-flex gap-5">
            <CardTitle tag="h5">Data Jabatan</CardTitle>
            <AddJabatan />
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>No</th>
                <th>Kode Jabatan</th>
                <th>Jabatan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {jabatans.map(({ jabatan }, index) => (
                <tr key={index} className="border-top">
                  <td>{index + 1}</td>
                  <td>{"JAB0" + (index + 1)}</td>
                  <td>{jabatan}</td>
                  <td>
                    <Button onClick={() => removeUser(index)}>
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

export default Jabatan;
