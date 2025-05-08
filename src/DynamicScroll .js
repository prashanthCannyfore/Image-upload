import React, { useEffect, useState } from 'react';

const generateUsers = () =>
  Array.from({ length: 500 }, (_, i) => ({
    id: i + 1,
    clientCode: `C-${1000 + i}`,
    clientName: `Client ${i + 1}`,
    firstName: `First${i + 1}`,
    lastName: `Last${i + 1}`,
    email: `user${i + 1}@example.com`,
    date: new Date(2025, 3, (i % 30) + 1).toLocaleDateString(),
    active: i % 2 === 0,
  }));

export default function DynamicScroll() {
  const fullList = generateUsers();
  const itemsPerPage = 10;

  const [visibleItems, setVisibleItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [search, setSearch] = useState('');
  const [droupdown, setDroupdown]=useState('');


  const filteredList = fullList.filter((user) =>
    `${user.clientCode} ${user.clientName} ${user.firstName} ${user.lastName} ${user.email} ${user.date} ${user.active ? 'active' : 'inactive'}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const loadMoreItems = () => {
    const nextItems = filteredList.slice(currentIndex, currentIndex + itemsPerPage);
    setVisibleItems((prev) => [...prev, ...nextItems]);
    setCurrentIndex((prev) => prev + itemsPerPage);
  };

  useEffect(() => {
    loadMoreItems();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
    setVisibleItems([]);
    setTimeout(() => loadMoreItems(), 0); 
  }, [search]);



  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= docHeight - 50) {
      loadMoreItems();
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Search</h2>
      <input
        type="text"
        value={search}
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: '100%', padding: '10px', fontSize: '16px', marginBottom: '20px' }}
      />

      <p>Total Users: {visibleItems.length} / {filteredList.length}</p>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Client Code</th>
            <th>Client Name</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {visibleItems.map((user) => (
            <tr key={user.id}>
              <td style={cellStyle}>{user.clientCode}</td>
              <td style={cellStyle}>{user.clientName}</td>
              <td style={cellStyle}>{user.firstName} {user.lastName}</td>
              <td style={cellStyle}>{user.email}</td>
              <td style={cellStyle}>{user.date}</td>
              <td style={cellStyle}>{user.active ? 'Active' : 'Inactive'}</td>
            </tr>
          ))}
          {visibleItems.length === 0 && (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center', color: 'gray', padding: '16px' }}>
                No matching records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

const cellStyle = {
  border: '1px solid #ccc',
  padding: '8px',
};
