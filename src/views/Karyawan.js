import { Card, CardBody, CardTitle, Table, Button } from "reactstrap";
import { AddKaryawan } from "./ui/Modal";
import { useEffect, useState } from "react";

const Karyawan = () => {
  const [users, setUsers] = useState([]);
  const getUsers = JSON.parse(localStorage.getItem("users")) || [];

  useEffect(() => {
    setUsers(getUsers);
  }, []);

  const removeUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };
  return (
    <div>
      <Card>
        <CardBody>
          <div className="d-flex gap-5">
            <CardTitle tag="h5">Data Karyawan</CardTitle>
            <AddKaryawan />
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>No</th>
                <td>Kode</td>
                <th className="pe-5 ps-5">Name</th>
                <th>Email</th>
                <th>Alamat</th>
                <th>Jabatan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {users.map(({ name, email, alamat, jabatan }, index) => (
                <tr key={index} className="border-top">
                  <td>{index + 1}</td>
                  <td>{"KA0" + (index + 1)}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{alamat}</td>
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

export default Karyawan;
